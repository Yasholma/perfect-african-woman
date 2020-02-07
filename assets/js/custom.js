const customers = [
	"Chioma Chibuzo",
	"Angela Chukwu",
	"Moses Silas",
	"John Diye",
	"Henry Egaga",
	"Theophilus Japhet",
	"Nathaniel Samuel",
	"Mary King",
	"Sarah Jones",
	"Gloria Paul",
	"Jenifer Sitya",
	"Oyelede Olaruwanju"
];

const purchaseTime = [
	"10 mins ago",
	"yesterday",
	"50 mins ago",
	"35 mins ago",
	"2 days ago",
	"5 mins ago",
	"just now",
	"15 mins ago",
	"2 days ago"
];

$(function() {
	setInterval(hideShow, 7000);
	showOrderForm();
	closeOrderForm();
    
    $(".open-nav").on("click", function() {
        if ($(this).hasClass("close-nav")) {
            $(this).removeClass("close-nav");
            $(".mobile-content").css("margin-left", -999);
        } else {
            $(this).addClass("close-nav");
            $(".mobile-content").css("margin-left", 0);
        }
    });
    
    $(".mobile-content .items .item > a").on("click", () => {
        $(".open-nav").removeClass("close-nav");
            $(".mobile-content").css("margin-left", -999);
    });
    
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 50) {
            $("#back-to-top").css("opacity", 1);
        } else {
            $("#back-to-top").css("opacity", 0);
        }
    });
    
});

function showOrderForm() {
	$("#showOrderForm").on("click", e => {
		e.preventDefault();
		$(".order-form").slideDown(500);
		$("#showOrderForm").fadeOut();
		$("#closeOrderForm")
			.removeClass("d-none")
			.fadeIn();
	});
}

function closeOrderForm() {
	$("#closeOrderForm").on("click", e => {
		e.preventDefault();
		$(".order-form").hide();
		$("#showOrderForm").show();
		$("#closeOrderForm").addClass("d-none");
	});
}

function hideShow() {
	if ($("#anim").hasClass("show-anim")) {
		let randomName = Math.floor(Math.random() * customers.length);
		let randPurchase = Math.floor(Math.random() * purchaseTime.length);
		let name = customers[randomName];
		let rTime = purchaseTime[randPurchase];
		$(".c-name").html(name);
		$(".p-time").html(rTime);
		$("#anim").removeClass("show-anim");
	} else {
		$("#anim").addClass("show-anim");
	}
}
