function  skillsMember() {
    return{

        restrict: 'E',
        templateUrl:'modules/skills/views/member.html',
        controller: 'SkillsMemeberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: '='
        };
    }


}