import {getUsers, follow, unFollow} from "../../redux/users-reducer";
import {connect} from "react-redux";
import React from "react";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "react-redux";

class UsersContainer extends React.Component {
    componentDidMount = () => {
        this.props.getUsers({
            currentPage: this.props.currentPage,
            pageSize: this.props.pageSize
        });
    };

    onPageChanged = (pageNumber) => {
        this.props.getUsers({
            currentPage: pageNumber,
            pageSize: this.props.pageSize
        });
    };

    render = () => <>
        <Preloader isFetching={this.props.isFetching} />
        <Users
            users={this.props.users}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            unFollow={this.props.unFollow}
            follow={this.props.follow}
            onPageChanged={this.onPageChanged}
            followingInProgress={this.props.followingInProgress}
        />
    </>
}

const mapStateToProps = state => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
});

export default (
    connect(mapStateToProps, {follow, unFollow, getUsers}),
    WithAuthRedirect
)(UsersContainer);