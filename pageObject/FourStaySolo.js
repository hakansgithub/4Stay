var manager = {
    login: function (data) {
        this
            .waitForElementPresent('@title', 3000)
            .verify.containsText('@title', data.title)
            .click('@signInLogo')
            .waitForElementVisible('@signInEmail', 500)
            .clearValue('@signInEmail')
            .setValue('@signInEmail', data.email)
            .clearValue('@signInPassword')
            .setValue('@signInPassword', data.password)
            .click('@signInLogin')
        return this
    },
    citySearch: function (data) {
        this
            .waitForElementVisible('@dashboardLogo', 3000)
            .clearValue('@searchBar')
            .assert.elementNotPresent('@logo', 3000)
            .setValue('@searchBar', data.city)
            .pause(500) //wait for dropdown to populate
            .api.keys(this.api.Keys.ENTER)
        this
            .waitForElementVisible('@logo', 10000)
            .pause(5000)
        return this
    },

}

module.exports = {
    url: 'https://4stay.com/',
    commands: [manager],
    elements: {
        title: {
            selector: '//*[@id="header"]/div/div[1]/div[1]/h1',
            locateStrategy: 'xpath'
        },
        signIn: {
            selector: '//*[@id="desktopMenu"]/ul/li[2]/a',
            locateStrategy: 'xpath'
        },
        list: {
            selector: '//*[@id="desktopMenu"]/ul/li[5]/a',
            locateStrategy: 'xpath'
        },
        dashboardLogo: '[href="/dashboard/home"]',
        signInLogo: '[href="#login-modal"]',
        signInEmail: {
            selector: '//*[@id="user_login"]',
            locateStrategy: 'xpath'
        },
        signInPassword: {
            selector: '//*[@id="user_password"]',
            locateStrategy: 'xpath'
        },
        signInLogin: {
            selector: '//*[@id="login_btn"]',
            locateStrategy: 'xpath'
        },
        searchBar: {
            selector: '//*[@id="home-search-form"]/div/input',
            locateStrategy: 'xpath'
        },
        zoom: {
            selector: '//*[@id="map_canvas"]/div/ng-map/div/div/div/div[8]/div[1]/div/button[1]',
            locateStrategy: 'xpath'
        },
        topBar: {
            selector: '//*[@id="topbar"]/div/div[2]/div/div[1]/input',
            locateStrategy: 'xpath'
        },
        picture: {
            selector: '//*[@id="result539"]/div[1]/div/div[2]/div',
            locateStrategy: 'xpath'
        },
        fourStayLogo: {
            selector: '//*[@id="header"]/div/div/div/div[2]/div/a/img',
            locateStrategy: 'xpath'
        },
        logo: {
            selector: '//*[@id="topbar"]/div/div[1]/a/img[1]',
            locateStrategy: 'xpath'
        },
        checkIn: {
            selector: '//*[@id="topbar"]/div/div[2]/div/div[2]/div[1]/input',
            locateStrategy: 'xpath'
        },
        checkOut: {
            selector: '//*[@id="topbar"]/div/div[2]/div/div[2]/div[2]/input',
            locateStrategy: 'xpath'
        },
        checkInMonth: {
            selector: '//*[contains(text(), "Jul 2019")]',
            locateStrategy: 'xpath'
        },
        checkInDay: {
            selector: '/html/body/div[2]/div[1]/div[2]/table/tbody/tr[3]/td[7]',
            locateStrategy: 'xpath'
        },
        checkOutMonth: {
            selector: '//*[contains(text(), "Jan 2020")]',
            locateStrategy: 'xpath'
        },
        checkOutDay: {
            selector: '/html/body/div[3]/div[1]/div[2]/table/tbody/tr[4]/td[2]',
            locateStrategy: 'xpath'
        },
        room: {
            selector: '//span[@class="dropdown-value room-type ng-binding"]',
            locateStrategy: 'xpath'
        },
        privateRoom: {
            selector: '//*[@id="advanced-search-page"]/div[1]/div[3]/div[2]/div[1]/div/div[2]/div[1]/div/div[1]/div[2]/div/input',
            locateStrategy: 'xpath'
        },
        roomApplyButton: {
            selector: '//*[@id="advanced-search-page"]/div[1]/div[3]/div[2]/div[1]/div/div[2]/div[1]/div/div[2]/div/button[2]',
            locateStrategy: 'xpath'
        },
        totalResult: {
            selector: '//*[contains(@count, "total_result")]',
            locateStrategy: 'xpath'
        },
        bath: {
            selector: '//span[@class="dropdown-value bath-type ng-binding"]',
            locateStrategy: 'xpath'
        },
        privateBath: {
            selector: '//*[@id="advanced-search-page"]/div[1]/div[3]/div[2]/div[1]/div/div[2]/div[2]/div/div[1]/div[1]/div/input',
            locateStrategy: 'xpath'
        },
        bathApplyButton: {
            selector: '//*[@id="advanced-search-page"]/div[1]/div[3]/div[2]/div[1]/div/div[2]/div[2]/div/div[2]/div/button[2]',
            locateStrategy: 'xpath'
        },
        image: {
            selector: '//*[@id="result27987"]/div[1]/div/div[2]/div',
            locateStrategy: 'xpath'
        }
    }

}