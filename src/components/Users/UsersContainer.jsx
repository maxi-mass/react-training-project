import {
    followUser,
    setCurrentPage,
    setIsFetching,
    setTotalUsersCount,
    setUsers,
    unFollowUser
} from "../../redux/users-reducer";
import {connect} from "react-redux";
import * as axios from "axios";
import React from "react";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";

class UsersContainer extends React.Component {
    componentDidMount = () => {
        this.props.setIsFetching(true);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
                this.props.setIsFetching(false);
            });
    };

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setIsFetching(true);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
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

