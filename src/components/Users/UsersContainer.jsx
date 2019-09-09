import {followUserAC, setUsersAC, unFollowUserAC} from "../../redux/users-reducer";
import Users from "./Users";
import {connect} from "react-redux";


const mapStateToProps = state => ({
    users: state.usersPage.users
});

const mapDispatchToProps = dispatch => ({
    followUser: userId => dispatch(followUserAC(userId)),
    unFollowUser: userId => dispatch(unFollowUserAC(userId)),
    setUsers: users => dispatch(setUsersAC(users)),
});

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
