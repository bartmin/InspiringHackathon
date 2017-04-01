var Description = React.createClass({
    render: function() {
        return (
            <div className="row text-center">
                <header>
                    <h3>Analiza Twojego profilu przebiegła pomyślnie.<br />
                    Możesz teraz edytować wyniki analizy.</h3>
                </header>
            </div>
        );
    }
});

var Slider = React.createClass({
    render: function() {
        return (
            <div className="slider row">
                <div className="magic-box">
                    <label for={this.props.id}>{this.props.label}</label><br />
                    <span style={{float:"left"}}><small>Tak</small></span>
                    <span style={{float:"right"}}><small>Nie</small></span>
                    <br />
                    <input type="range" min="1" max="4" step="1" id={this.props.id} />
                </div>
            </div>
        );
    }
});

var SliderContainer = React.createClass({
    render: function() {
        return (
            <div class="slider-container row">
                <Slider label="Oszczędny" id="oszczedny" />
                <Slider label="Obieżyświat" id="obiezyswiat" />
                <Slider label="Ciepłolubność" id="cieplolubnosc" />
            </div>
        );
    }
});

var ShowMatchesButton = React.createClass({
    render: function() {
        return (
            <div className="row">
                <div className="magic-box">
                    <button className="btn btn-primary" onClick={() => {this.props.router.switchTo('offers');}}>Pokaż wyniki</button>
                </div>
            </div>
        );
    }
});

var PreferencesPage = React.createClass({
    getInitialState: function() {
        return {userData: this.props.userData};
    },

    render: function() {
        return (
            <div class="md-col-12">
                <Description />
                <SliderContainer />
                <ShowMatchesButton router={this.props.router} />
            </div>
        );
    }
});