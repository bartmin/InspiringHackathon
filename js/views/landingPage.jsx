var LandingPageHeader = React.createClass({
    render: function() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <header className="text-center">
                        <h1>PodróżniKonto</h1>

                        <h3>Spersonalizowana przygoda</h3>
                    </header>
                </div>
            </div>
        );
    }
});

var ConnectWithAccountButton = React.createClass({login: function() {
        var that = this;
        $.get('http://8328e27a.ngrok.io/login', { user: "user2" } ,function(data) {
            that.props.setData({
                userData: data
            })
        });
        this.props.router.switchTo('preferences');
    },

    render: function() {
        return (
            <div className="row">
                <button className="btn btn-primary btn-lg" style={{margin: "0 auto"}} onClick={() => {this.login()}}>Połącz z kontem</button>
            </div>
        );
    }
});

var TravelQuote = React.createClass({
    render: function() {
        return (
            <div className="travel-quote row text-center">
                <blockquote>
                    <p>Podróże kształcą czy chuj</p>
                    <small>Paulo Coelho</small>
                </blockquote>
            </div>
        );
    }
});

var LandingPage = React.createClass({
    getInitialState: function() {
        return {userData: null};
    },

    setData: function(data) {
        this.setState({
            userData: data
        });
        this.props.setUserData(data);
    },

    render: function() {
        return (
            <div id="wrapper">
                <LandingPageHeader />
                <ConnectWithAccountButton router={this.props.router} setData={(data) => {this.setData(data)}}  />
                <TravelQuote />
            </div>
        );
    }
});