
TestFramework.filter("mobileToCall", function ($sce) {
    return function (email) {
        var pre = "<a href='tel:" + email + "'>";
        var post = "</a>";
        return $sce.trustAsHtml(pre + email + post);
    }
});

TestFramework.filter("toHtml", function ($sce) {
    return function (html) {
        return $sce.trustAsHtml(html);
    }
});

TestFramework.filter("removeDomain", function ($sce) {
    return function (email) {
        var domain = '@gmail.com';
        return email.replace(domain, '');
    }
});


TestFramework.filter("mailToLink", function ($sce) {
    return function (email) {
        var pre = "<a href='mailto:" + email + "'>";
        var post = "</a>"; 
        return $sce.trustAsHtml(pre + email + post);
    }
});
