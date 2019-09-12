import {
    followUserAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowUserAC
} from "../../redux/users-reducer";
import {connect} from "react-redux";
import * as axios from "axios";
import React from "react";
import Users from "./Users";

class UsersContainer extends React.Component {
    componentDidMount = () => {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    };

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    };

    render = () =>  <Users
        users={this.props.users}
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        unFollowUser={this.props.unFollowUser}
        followUser={this.props.followUser}
        onPageChanged={this.onPageChanged}
    />
}

const mapStateToProps = state => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
});

const mapDispatchToProps = dispatch => ({
    followUser: userId => dispatch(followUserAC(userId)),
    unFollowUser: userId => dispatch(unFollowUserAC(userId)),
    setUsers: users => dispatch(setUsersAC(users)),
    setTotalUsersCount: totalUsersCount => dispatch(setTotalUsersCountAC(totalUsersCount)),
    setCurrentPage: currentPage => dispatch(setCurrentPageAC(currentPage))
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

