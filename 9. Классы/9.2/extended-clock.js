class ExtendedClock extends Clock {
    
    constructor(clockSettings) {
        super(clockSettings);
        let { precision = 1000 } = clockSettings
        this.precision = precision 
    }

    start() {
		this.render();
		this.timer = setInterval(() => this.render(), this.precision );
	}
}