import {
    followUserAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowUserAC
} from "../../redux/users-reducer";
import Users from "./Users";
import {connect} from "react-redux";

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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
