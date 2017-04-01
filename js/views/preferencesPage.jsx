var ProfileImage = React.createClass({
    render: function() {
        var image = (this.props.image == null) ? "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" : this.props.image;
        return (
            <div className="col-md-12">
                <img src={image} alt="Profile image" className="img-rounded img-responsive" />
            </div>
        );
    }
});

var UserForm = React.createClass({
    render: function() {
        var user = (this.props.userData != null) ? this.props.userData : {
            WYKSZTALCENIE: "",
            KLIENT_ID: "",
            POSIADA_NIERUCHOMOSC: "",
            TYP_DOCHODU: "",
            name: ""
        };


        return (
            <div className="col-md-12 user-description">
                <h4>{user.name}</h4>
                <p>
                    <b>Wykształcenie:</b> {user.WYKSZTALCENIE}
                    <br />
                    <b>ID klienta:</b> {user.KLIENT_ID}
                    <br />
                    <b>Nieruchomości:</b> {user.POSIADA_NIERUCHOMOSC}
                    <br />
                    <b>Typ dochodu:</b> {user.TYP_DOCHODU}
                </p>
            </div>
        );
    }
});

var ShowMatchesButton = React.createClass({
    render: function() {
        return (
            <div className="col-md-12">
                <div className="magic-box">
                    <button className="btn btn-primary" onClick={() => {this.props.router.switchTo('offers');}}>Pokaż oferty</button>
                </div>
            </div>
        );
    }
});

var PreferencesPage = React.createClass({
    render: function() {
        var image = (this.props.userData == null) ? null : this.props.userData.picture;
        var user = (this.props.userData == null) ? null : this.props.userData;
        return (
            <div className="row">
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h3 className="panel-title">Twój profil</h3>
                    </div>
                    <div className="panel-body">
                        <ProfileImage image={image} />
                        <UserForm userData={user} />
                        <ShowMatchesButton router={this.props.router} />
                    </div>
                </div>
            </div>
        );
    }
});