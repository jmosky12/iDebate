var categories = {
    climate: false,
    gun: false,
    family: false,
    friendships: false,
    health: false,
    success: false,
    history: false,
    food: false,
    global: false,
    literature: false,
    housing: false
};

var changeBackground = function(id_label, id_icon, isSelected) {
    if (isSelected) {
        document.getElementById(id_label).style.backgroundColor = '#3777dd';
        document.getElementById(id_label).style.color = 'white';
        document.getElementById(id_icon).style.opacity = 0.6;
    } else {
        document.getElementById(id_label).style.backgroundColor = '';
        document.getElementById(id_label).style.color = 'black';
        document.getElementById(id_icon).style.opacity = 1;
    }
};

Template.categories.events({
    'click .climate'(event) {
        event.preventDefault();
        let isSelected = !categories.climate;
        categories.climate = isSelected;
        changeBackground('climate-label', 'climate-icon', isSelected);
    },
    'click .gun'(event) {
        event.preventDefault();
        let isSelected = !categories.gun;
        categories.gun = isSelected;
        changeBackground('gun-label', 'gun-icon', isSelected);
    },
    'click .immigration'(event) {
        event.preventDefault();
        let isSelected = !categories.immigration;
        categories.immigration = isSelected;
        changeBackground('immigration-label', 'immigration-icon', isSelected);
    },
    'click .family'(event) {
        event.preventDefault();
        let isSelected = !categories.family;
        categories.family = isSelected;
        changeBackground('family-label', 'family-icon', isSelected);
    },
    'click .friendships'(event) {
        event.preventDefault();
        let isSelected = !categories.friendships;
        categories.friendships = isSelected;
        changeBackground('friendships-label', 'friendships-icon', isSelected);
    },
    'click .health'(event) {
        event.preventDefault();
        let isSelected = !categories.health;
        categories.health = isSelected;
        changeBackground('health-label', 'health-icon', isSelected);
    },
    'click .success'(event) {
        event.preventDefault();
        let isSelected = !categories.success;
        categories.success = isSelected;
        changeBackground('success-label', 'success-icon', isSelected);
    },
    'click .history'(event) {
        event.preventDefault();
        let isSelected = !categories.history;
        categories.history = isSelected;
        changeBackground('history-label', 'history-icon', isSelected);
    },
    'click .food'(event) {
        event.preventDefault();
        let isSelected = !categories.food;
        categories.food = isSelected;
        changeBackground('food-label', 'food-icon', isSelected);
    },
    'click .global'(event) {
        event.preventDefault();
        let isSelected = !categories.global;
        categories.global = isSelected;
        changeBackground('global-label', 'global-icon', isSelected);
    },
    'click .literature'(event) {
        event.preventDefault();
        let isSelected = !categories.literature;
        categories.literature = isSelected;
        changeBackground('literature-label', 'literature-icon', isSelected);
    },
    'click .housing'(event) {
        event.preventDefault();
        let isSelected = !categories.housing;
        categories.housing = isSelected;
        changeBackground('housing-label', 'housing-icon', isSelected);
    },
    
    'click .categories-done'(event) {
        event.preventDefault();
        var categoriesList = [];
        for (var interest in categories) {
            if (categories.hasOwnProperty(interest)) {
                if (categories[interest]) {
                    categoriesList.push(interest.toString());
                } 
            }
        }
        if (categoriesList.length == 0) {
            window.alert("You must select at least 1 interest.");
        } else {
            // store categories
            var categoriesString = categoriesList.join("-"); 
            Router.go('/topics');
        }
    }
});