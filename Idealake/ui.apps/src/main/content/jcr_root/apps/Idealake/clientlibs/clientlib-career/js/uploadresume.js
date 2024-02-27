const realFileBtn = document.getElementById("resumeAttached"),
    customBtn = document.getElementById("file-attached"),
    openFile = document.getElementById("fileOpen"),
    customTxt = document.getElementById("custom-text");
openFile.addEventListener("click", (function() {
    realFileBtn.click()
})), realFileBtn.addEventListener("change", (function() {
    realFileBtn.value ? customTxt.innerHTML = realFileBtn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1] : customTxt.innerHTML = "No file chosen, yet."
})), $(document).ready((function() {
    $("input,textarea").keypress((function(e) {
        if ("" == $(this).val() && 32 == e.keyCode) return !1
    })), $(".js-required").on("blur", (function() {
        var e = $(this).next(".validate-error"),
            t = $(this).parent();
        $.empty_field_validation($(this).val()) && "" != $(this).val() ? (e.html(""), e.css("display", "none"), t.removeClass("error"), errors = !1) : (e.html("This field is required."), e.css("display", "block"), t.removeClass("valid").addClass("error"), errors = !0)
    })), $.empty_field_validation = function(e) {
        return "" != e.trim()
    }, $("#subject").on("change", (function() {
        var e = $(this).next(".validate-error"),
            t = $(this).parent();
        $.empty_field_validation($(this).val()) && "" != $(this).val() ? (e.html(""), e.css("display", "none"), t.removeClass("error"), $(".select-service-btn").addClass("txt-clr"), errors = !1) : (e.html("This field is required."), e.css("display", "block"), t.removeClass("valid").addClass("error"), $(".select-service-btn").removeClass("txt-clr"), errors = !0)
    })), $(".js-email").on("blur", (function() {
        var e = $(this).next(".validate-error"),
            t = $(this).val(),
            a = $(this).parent();
        0 == $.trim(t).length ? e.html("This field is required.") : $.email_validation(t) ? (e.html(""), e.css("display", "none"), a.removeClass("error"), errors = !1) : (e.html("Invalid Email ID"), e.css("display", "block"), a.removeClass("valid").addClass("error"), errors = !0)
    })), $.email_validation = function(e) {
        return /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(e)
    }, $(".js-alphabateOnly").keyup((function() {
        $(this).val($(this).val().replace(/[^a-z A-Z]/g, ""))
    })), $(".empty").on("keypress", (function(e) {
        if (50 == e.which) return !1
    })), $("#resumeAttached").on("change", (function() {
        if (0 === $("#resumeAttached")[0].files.length) $("#resumeAttached").parents(".carrer-form-control").find(".validate-error").show().text("No file chosen.");
        else {
            var e = $("#resumeAttached")[0].files[0].size;
            myfile = $("#resumeAttached").val();
            var t = myfile.split(".").pop();
            if ("pdf" == t || "docx" == t || "doc" == t) return $("#resumeAttached").parents(".carrer-form-control").find(".validate-error").hide().text(""), e > 2097152 ? ($("#resumeAttached").parents(".carrer-form-control").find(".validate-error").show().text("File size is greater than 2MB"), $(".file-attached span").text("Choose file"), $("#resumeAttached").val(""), !1) : ($("#resumeAttached").parents(".carrer-form-control").find(".validate-error").show().text(""), !0);
            $(".file-attached span").text("Choose file"), document.getElementById("resumeAttached").value = null, $("#resumeAttached").parents(".carrer-form-control").find(".validate-error").show(), $("#resumeAttached").parents(".carrer-form-control").find(".validate-error").text("File not supported")
        }
    }))
}));
const inputElement = document.querySelector("#resumeAttached");
let base64String, filename;

function handleFileSelect(e) {
    const t = e.target.files[0];
    filename = t.name;
    const a = new FileReader;
    a.onload = function(e) {
        base64String = btoa(e.target.result)
    }, a.readAsBinaryString(t)
}
inputElement.addEventListener("change", handleFileSelect, !1), $(document).on("click", "#submit", (async function(e) {
    if (e.preventDefault(), $(this).attr("disabled", "disabled"), $(".js-required").trigger("blur"), $("#resumeAttached").trigger("change"), errorDiv = $(".error"), 0 === errorDiv.length) {
        var t = document.getElementById("fullName").value,
            a = document.getElementById("contactEmail").value,
            r = document.getElementById("subject").value;
        let e = base64String;
        var n = document.getElementById("about").value,
            i = {
                name: t,
                email: a,
                subject: r,
                filename: filename,
                attachment: e,
                description: n
            },
            s = {
                name: t,
                email: a,
                designation: r
            };
        try {
            const e = await fetch("https://www.idealake.com/Token/CreateToken", {
                    headers: {
                        "content-type": "application/json"
                    }
                }),
                t = await e.json();
            if (t) {
                const e = await fetch("https://www.idealake.com/Common/SendEmail", {
                    method: "post",
                    headers: {
                        "content-type": "application/json",
                        Authorization: `Bearer ${t.authenticationToken}`
                    },
                    body: JSON.stringify(i)
                });
                if (await e.json()) {
                    const e = await fetch("https://www.idealake.com/Common/SendEmailToUser", {
                        method: "post",
                        headers: {
                            "content-type": "application/json",
                            Authorization: `Bearer ${t.authenticationToken}`
                        },
                        body: JSON.stringify(s)
                    });
                    await e.json() && ($("#succModCareer").css("display", "block"), $("header").css("z-index", "1"), $("#md-layer").addClass("is-active"), $("html").addClass("noScroll"), $(".form-appended input").val(""), $(".form-appended textarea").val(""), $(".file-attached span").text("Choose file"), $("#subject").val($("#subject option:first").val()))
                }
            }
        } catch (e) {
            console.log(e.message, "error")
        }
    }
})), $(".icon-close").on("click", (function() {
    $("#succModCareer").css("display", "none"), $("#md-layer").removeClass("is-active"), $("html").removeClass("noScroll"), $("header").css("z-index", "99"), $("#submit").removeAttr("disabled")
}));