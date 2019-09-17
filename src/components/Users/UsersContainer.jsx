import {
    followUser,
    setCurrentPage,
    setIsFetching,
    setTotalUsersCount,
    setUsers,
    unFollowUser
} from "../../redux/users-reducer";
import {connect} from "react-redux";
import React from "react";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import {usersAPI} from '../../api/api';

class UsersContainer extends React.Component {
    componentDidMount = () => {
        this.props.setIsFetching(true);
        usersAPI.getUsers({
            currentPage:this.props.currentPage,
            pageSize: this.props.pageSize
        }).then(response => {
            this.props.setUsers(response.items);
            this.props.setTotalUsersCount(response.totalCount);
            this.props.setIsFetching(false);
        });
    };

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setIsFetching(true);
        usersAPI.getUsers({
            currentPage: pageNumber,
            pageSize: this.props.pageSize
        }).then(response => {
            this.props.setUsers(response.items);
            this.props.setIsFetching(false);
        });
    };

    render = () => <>
        <Preloader isFetching={this.props.isFetching} />
        <Users
            users={this.props.users}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            unFollowUser={this.props.unFollowUser}
            followUser={this.props.followUser}
            onPageChanged={this.onPageChanged}
        />
    </>
}

const mapStateToProps = state => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
});



export default connect(mapStateToProps, {
    followUser,
    unFollowUser,
    setUsers,
    setTotalUsersCount,
    setCurrentPage,
    setIsFetching
})(UsersContainer);

