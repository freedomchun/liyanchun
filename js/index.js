! function(t, e) {
	var i = function() {
		function i(e, i) {
			"dot" == e ? (i = '<ol class="dots">', t.each(n.li, function(t) {
				i += '<li class="' + (t == n.i ? e + " active" : e) + '">' + ++t + "</li>"
			}), i += "</ol>") : (i = '<div class="', i = i + e + 's">' + i + e + ' prev">' + n.o.prev + "</div>" + i + e + ' next">' + n.o.next + "</div></div>"), n.el.addClass("has-" + e + "s").append(i).find("." + e).click(function() {
				var e = t(this);
				e.hasClass("dot") ? n.stop().to(e.index()) : e.hasClass("prev") ? n.prev() : n.next()
			})
		}
		var n = this;
		n.o = {
			speed: 500,
			delay: 3e3,
			init: 0,
			pause: !e,
			loop: !e,
			keys: e,
			dots: e,
			arrows: e,
			prev: "&larr;",
			next: "&rarr;",
			fluid: e,
			starting: e,
			complete: e,
			items: ">ul",
			item: ">li",
			easing: "swing",
			autoplay: !0
		}, n.init = function(e, o) {
			n.o = t.extend(n.o, o), n.el = e, n.ul = e.find(n.o.items), n.max = [0 | e.outerWidth(), 0 | e.outerHeight()], n.li = n.ul.find(n.o.item).each(function(e) {
				var i = t(this),
					o = i.outerWidth(),
					s = i.outerHeight();
				o > n.max[0] && (n.max[0] = o), s > n.max[1] && (n.max[1] = s)
			});
			var o = n.o,
				s = n.ul,
				a = n.li,
				l = a.length;
			return n.i = 0, e.css({
				width: n.max[0],
				height: a.first().outerHeight(),
				overflow: "hidden"
			}), s.css({
				position: "relative",
				left: 0,
				width: 100 * l + "%"
			}), o.fluid ? a.css({
				"float": "left",
				width: 100 / l + "%"
			}) : a.css({
				"float": "left",
				width: n.max[0] + "px"
			}), o.autoplay && setTimeout(function() {
				0 | o.delay && (n.play(), o.pause && e.on("mouseover mouseout", function(t) {
					n.stop(), "mouseout" == t.type && n.play()
				}))
			}, 0 | o.init), o.keys && t(document).keydown(function(t) {
				var e = t.which;
				37 == e ? n.prev() : 39 == e ? n.next() : 27 == e && n.stop()
			}), o.dots && i("dot"), o.arrows && i("arrow"), o.fluid && t(window).resize(function() {
				n.r && clearTimeout(n.r), n.r = setTimeout(function() {
					var t = {
							height: a.eq(n.i).outerHeight()
						},
						i = e.outerWidth();
					s.css(t), t.width = Math.min(Math.round(i / e.parent().width() * 100), 100) + "%", e.css(t), a.css({
						width: i + "px"
					})
				}, 50)
			}).resize(), (t.event.special.move || t.Event("move")) && e.on("movestart", function(t) {
				t.distX > t.distY && t.distX < -t.distY || t.distX < t.distY && t.distX > -t.distY ? t.preventDefault() : e.data("left", n.ul.offset().left / e.width() * 100)
			}).on("move", function(t) {
				var i = 100 * t.distX / e.width();
				n.ul.css("left", e.data("left") + i + "%"), n.ul.data("left", i)
			}).on("moveend", function(t) {
				var e = n.ul.data("left");
				if(Math.abs(e) > 30) {
					var i = e > 0 ? n.i - 1 : n.i + 1;
					(i < 0 || i >= l) && (i = n.i), n.to(i)
				} else n.to(n.i)
			}), n
		}, n.to = function(i, o) {
			n.t && (n.stop(), n.play());
			var s = n.o,
				a = n.el,
				l = n.ul,
				r = n.li,
				u = (n.i, r.eq(i));
			if(u.length && !(i < 0) || s.loop != e) {
				u.length || (i = 0), i < 0 && (i = r.length - 1), u = r.eq(i);
				var d = o ? 5 : 0 | s.speed,
					c = s.easing,
					f = {
						height: u.outerHeight()
					};
				l.queue("fx").length || (a.find(".dot").eq(i).addClass("active").siblings().removeClass("active"), t.isFunction(s.starting) && !o && s.starting(a, u), a.animate(f, d, c) && l.animate(t.extend({
					left: "-" + i + "00%"
				}, f), d, c, function(e) {
					n.i = i, t.isFunction(s.complete) && !o && s.complete(a, u)
				}))
			}
		}, n.play = function() {
			n.t = setInterval(function() {
				n.to(n.i + 1)
			}, 0 | n.o.delay)
		}, n.stop = function() {
			return n.t = clearInterval(n.t), n
		}, n.next = function() {
			return n.stop().to(n.i + 1)
		}, n.prev = function() {
			return n.stop().to(n.i - 1)
		}
	};
	t.fn.unslider = function(e) {
		var n = this.length;
		return this.each(function(o) {
			var s = t(this),
				a = "unslider" + (n > 1 ? "-" + ++o : ""),
				l = (new i).init(s, e);
			s.data(a, l).data("key", a)
		})
	}, i.version = "1.0.0"
}(jQuery, !1);
! function(e, t, i, o) {
	var n = e(t);
	e.fn.lazyload = function(r) {
		function f() {
			var t = 0;
			l.each(function() {
				var i = e(this);
				if(!h.skip_invisible || i.is(":visible"))
					if(e.abovethetop(this, h) || e.leftofbegin(this, h));
					else if(e.belowthefold(this, h) || e.rightoffold(this, h)) {
					if(++t > h.failure_limit) return !1
				} else i.trigger("appear"), t = 0
			})
		}
		var a, l = this,
			h = {
				threshold: 0,
				failure_limit: 0,
				event: "scroll",
				effect: "show",
				container: t,
				data_attribute: "original",
				skip_invisible: !1,
				appear: null,
				load: null,
				placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
			};
		return r && (o !== r.failurelimit && (r.failure_limit = r.failurelimit, delete r.failurelimit), o !== r.effectspeed && (r.effect_speed = r.effectspeed, delete r.effectspeed), e.extend(h, r)), a = h.container === o || h.container === t ? n : e(h.container), 0 === h.event.indexOf("scroll") && a.bind(h.event, function() {
			return f()
		}), this.each(function() {
			var t = this,
				i = e(t);
			t.loaded = !1, i.attr("src") !== o && i.attr("src") !== !1 || i.is("img") && i.attr("src", h.placeholder), i.one("appear", function() {
				if(!this.loaded) {
					if(h.appear) {
						var o = l.length;
						h.appear.call(t, o, h)
					}
					e("<img />").bind("load", function() {
						var o = i.attr("data-" + h.data_attribute);
						i.hide(), i.is("img") ? i.attr("src", o) : i.css("background-image", "url('" + o + "')"), i[h.effect](h.effect_speed), t.loaded = !0;
						var n = e.grep(l, function(e) {
							return !e.loaded
						});
						if(l = e(n), h.load) {
							var r = l.length;
							h.load.call(t, r, h)
						}
					}).attr("src", i.attr("data-" + h.data_attribute))
				}
			}), 0 !== h.event.indexOf("scroll") && i.bind(h.event, function() {
				t.loaded || i.trigger("appear")
			})
		}), n.bind("resize", function() {
			f()
		}), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && n.bind("pageshow", function(t) {
			t.originalEvent && t.originalEvent.persisted && l.each(function() {
				e(this).trigger("appear")
			})
		}), e(i).ready(function() {
			f()
		}), this
	}, e.belowthefold = function(i, r) {
		var f;
		return f = r.container === o || r.container === t ? (t.innerHeight ? t.innerHeight : n.height()) + n.scrollTop() : e(r.container).offset().top + e(r.container).height(), f <= e(i).offset().top - r.threshold
	}, e.rightoffold = function(i, r) {
		var f;
		return f = r.container === o || r.container === t ? n.width() + n.scrollLeft() : e(r.container).offset().left + e(r.container).width(), f <= e(i).offset().left - r.threshold
	}, e.abovethetop = function(i, r) {
		var f;
		return f = r.container === o || r.container === t ? n.scrollTop() : e(r.container).offset().top, f >= e(i).offset().top + r.threshold + e(i).height()
	}, e.leftofbegin = function(i, r) {
		var f;
		return f = r.container === o || r.container === t ? n.scrollLeft() : e(r.container).offset().left, f >= e(i).offset().left + r.threshold + e(i).width()
	}, e.inviewport = function(t, i) {
		return !(e.rightoffold(t, i) || e.leftofbegin(t, i) || e.belowthefold(t, i) || e.abovethetop(t, i))
	}, e.extend(e.expr[":"], {
		"below-the-fold": function(t) {
			return e.belowthefold(t, {
				threshold: 0
			})
		},
		"above-the-top": function(t) {
			return !e.belowthefold(t, {
				threshold: 0
			})
		},
		"right-of-screen": function(t) {
			return e.rightoffold(t, {
				threshold: 0
			})
		},
		"left-of-screen": function(t) {
			return !e.rightoffold(t, {
				threshold: 0
			})
		},
		"in-viewport": function(t) {
			return e.inviewport(t, {
				threshold: 0
			})
		},
		"above-the-fold": function(t) {
			return !e.belowthefold(t, {
				threshold: 0
			})
		},
		"right-of-fold": function(t) {
			return e.rightoffold(t, {
				threshold: 0
			})
		},
		"left-of-fold": function(t) {
			return !e.rightoffold(t, {
				threshold: 0
			})
		}
	})
}(jQuery, window, document);
$(function() {
	require(["web_qui_quiautocomplete"], function(a) {
		function n() {
			var a = 6,
				n = 0,
				t = "<ul>",
				o = i(),
				s = e();
			return t += o.join(""), n = o.length, s = s.slice(0, a - n), t += s.join(""), t += "</ul>"
		}

		function e() {
			var a = [];
			return a.push('<li><a href="//z.qyer.com/all_0_0_0_0_0_0_0/?keyword=日本" data-bn-ipg="zsj-search-hot"><em>热门搜索</em><span class="name">日本</span></a></li>'), a.push('<li><a href="//z.qyer.com/all_0_0_0_0_0_0_0/?keyword=清迈" data-bn-ipg="zsj-search-hot"><em>热门搜索</em><span class="name">清迈</span></a></li>'), a.push('<li><a href="//z.qyer.com/all_0_0_0_0_0_0_0/?keyword=海岛" data-bn-ipg="zsj-search-hot"><em>热门搜索</em><span class="name">海岛</span></a></li>'), a.push('<li><a href="//z.qyer.com/all_0_0_0_0_0_0_0/?keyword=法国" data-bn-ipg="zsj-search-hot"><em>热门搜索</em><span class="name">法国</span></a></li>'), a.push('<li><a href="//z.qyer.com/all_0_0_0_0_0_0_0/?keyword=台湾" data-bn-ipg="zsj-search-hot"><em>热门搜索</em><span class="name">台湾</span></a></li>'), a.push('<li><a href="//z.qyer.com/all_0_0_0_0_0_0_0/?keyword=韩国" data-bn-ipg="zsj-search-hot"><em>热门搜索</em><span class="name">韩国</span></a></li>'), a
		}

		function i() {
			for(var a = [], n = o(), e = "", i = "", t = 0; t < n.length && (e = n[t].val, i = "/all_0_0_0_0_0_0_0?keyword=" + encodeURIComponent(e), a.push('<li><a href="' + i + '" data-bn-ipg="zsj-search-history"><em>历史记录</em><span class="zwui-iconfont icon-clock"></span><span class="name">' + e + "</span></a></li>"), 2 != t); t++);
			return a
		}

		function t(a, n) {
			var e = o(),
				i = {
					val: a || "",
					url: n || ""
				};
			if("" !== a) {
				e.length > 10 && (e.length = 10);
				for(var t = 0; t < e.length; t++) e[t].val == a && e.splice(t, 1);
				window.localStorage && (e.unshift(i), window.localStorage.zuishijie_search_history = JSON.stringify(e))
			}
		}

		function o() {
			var a = [];
			return window.localStorage && window.localStorage.zuishijie_search_history && (a = jQuery.parseJSON(window.localStorage.zuishijie_search_history)), a
		}
		var s = n();
		new a({
			target: "#zwhomeSearchText",
			parent: "#zwhomeSearchs",
			width: "440",
			zindex: 99,
			dataSource: "/?action=new_search",
			submitOnEnter: !1,
			defalutHTML: s,
			onItemSelected: function(a) {
				var n = $(a).attr("data-url"),
					e = $(a).attr("data-value");
				t(e, n), window.location.href = n
			},
			onIndexChanged: function(a, n) {},
			onKeyEnter: function() {},
			contentHTML: function(a) {
				var n = "";
				return $.each(a.keywords, function(a, e) {
					e.title;
					n += '<li class="qui-autoComplete-item" data-value="' + e.title + '" data-url="' + e.url + '" data-bn-ipg="zsj-search-suggest"><em>' + e.type + '</em><span class="name">' + e.title + "</span></li>"
				}), n
			}
		});
		$("#zwhomeSearchs").on("submit", function(a) {
			var n = $("#zwhomeSearchText").val();
			return n = jQuery.trim(n), "" !== n && void t(n)
		})
	})
}), $(function() {
	function a(a) {
		window.clearTimeout(s), s = window.setTimeout(function() {
			"number" == typeof a && (r = a), e.css("width", "1160px"), i.children("li").removeClass("active").eq(r).addClass("active"), t.show();
			var n = o.hide().eq(r).show();
			n.find(".zw-home-category-subject img").each(function(a, n) {
				var e = $(n).attr("data-original");
				$(n).attr("src", e)
			}), n.find(".zw-home-category-ztpic img").each(function(a, n) {
				var e = $(n).attr("data-original");
				$(n).attr({
					src: e,
					height: "auto"
				})
			})
		}, 100)
	}

	function n() {
		window.clearTimeout(s), s = window.setTimeout(function() {
			e.css("width", ""), i.children("li").removeClass("active"), t.hide()
		}, 100)
	}
	var e = $("#zwCategory"),
		i = $("#zwCategoryList"),
		t = $("#zwCategoryContents"),
		o = $(".zw-home-category-content"),
		s = null,
		r = 0;
	i.on("mouseenter", "li", function(n) {
		var e = $(this).index();
		a(e)
	}).on("mouseleave", "li", function(a) {
		n()
	}), t.on("mouseenter", function(n) {
		a()
	}).on("mouseleave", function(a) {
		n()
	})
}),   $(function() {
	function a(a, n) {
		$(n).removeClass(a + " animated").addClass(a + " animated").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
			$(this).removeClass(a + " animated")
		})
	}
	var n = $(".zw-home-tags");

}), $(function() {
	$("img.lazy").lazyload()
});
