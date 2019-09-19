import {
    followUser, getUsersThunkCreator,
    setCurrentPage, setFollowingInProgress,
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
        this.props.getUsersThunkCreator({
            currentPage: this.props.currentPage,
            pageSize: this.props.pageSize
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
            setFollowingInProgress={this.props.setFollowingInProgress}
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
const mapDispatchToProps = dispatch => ({
        getUsersThunkCreator: ({currentPage, pageSize}) => {
            dispatch(setIsFetching(true));
            usersAPI.getUsers({currentPage, pageSize}).then(response => {
                dispatch(setUsers(response.items));
                dispatch(setTotalUsersCount(response.totalCount));
                dispatch(setIsFetching(false));
            });
        },
        setIsFetching: isFetching => {
            dispatch(setIsFetching(isFetching));
        }
});
/*    debugger
    return {

        getUsersThunkCreator: ({currentPage, pageSize}) => {
            return () => {
                dispatch(setIsFetching(true));
                usersAPI.getUsers({currentPage, pageSize}).then(response => {
                    dispatch(setUsers(response.items));
                    dispatch(setTotalUsersCount(response.totalCount));
                    dispatch(setIsFetching(false));
                });
            };
        }
    }*/

/*export default connect(mapStateToProps, {
    followUser,
    unFollowUser,
    setUsers,
    setTotalUsersCount,
    setCurrentPage,
    setIsFetching,
    setFollowingInProgress,
    getUsersThunkCreator: (dispatch) => {
        return ({currentPage, pageSize}) => {
            return () => {
                dispatch(setIsFetching(true));
                usersAPI.getUsers({currentPage, pageSize}).then(response => {
                    dispatch(setUsers(response.items));
                    dispatch(setTotalUsersCount(response.totalCount));
                    dispatch(setIsFetching(false));
                });
            };
        }
    }
})(UsersContainer);*/
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
