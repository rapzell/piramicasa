"use client";
import { useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

gsap.registerPlugin(ScrollTrigger);

export function useGsapAnimations() {
  useIsoLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Respect reduced motion
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) return;

      // === HERO TIMELINE ===
      const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
      heroTl
        .from("[data-anim='hero-label']", { y: 30, opacity: 0, duration: 0.8 })
        .from("[data-anim='hero-title']", { y: 50, opacity: 0, duration: 1.0 }, "-=0.4")
        .from("[data-anim='hero-text']", { y: 30, opacity: 0, duration: 0.8 }, "-=0.6")
        .from("[data-anim='hero-cta']", { y: 25, opacity: 0, duration: 0.6, stagger: 0.15 }, "-=0.5")
        .from("[data-anim='scroll-indicator']", { y: 20, opacity: 0, duration: 0.6 }, "-=0.3");

      // === SECTION HEADINGS (fade-up on scroll) ===
      gsap.utils.toArray<HTMLElement>("[data-anim='section-heading']").forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      // === SECTION LEADS ===
      gsap.utils.toArray<HTMLElement>("[data-anim='section-lead']").forEach((el) => {
        gsap.from(el, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      // === STATS COUNT-UP ===
      gsap.utils.toArray<HTMLElement>("[data-anim='stat']").forEach((el) => {
        const numEl = el.querySelector(".pm-stat-num");
        const raw = numEl?.textContent?.trim() || "";
        const match = raw.match(/^(\d+)/);
        if (match) {
          const target = parseInt(match[1]);
          const suffix = raw.replace(/^\d+/, "");
          const obj = { val: 0 };
          gsap.to(obj, {
            val: target,
            duration: 1.8,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 85%" },
            onUpdate: () => {
              if (numEl) numEl.textContent = Math.round(obj.val) + suffix;
            },
          });
        }
        gsap.from(el, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      // === PRODUCT SHOWCASES (staggered fade-up) ===
      gsap.utils.toArray<HTMLElement>("[data-anim='product-showcase']").forEach((el) => {
        const info = el.querySelector(".pm-product-info");
        const img = el.querySelector(".pm-product-image");
        const tl = gsap.timeline({
          scrollTrigger: { trigger: el, start: "top 80%" },
        });
        if (info) tl.from(info, { x: -50, opacity: 0, duration: 0.8, ease: "power3.out" });
        if (img) tl.from(img, { x: 50, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.7");
      });

      // === PRODUCT IMAGES PARALLAX ===
      gsap.utils.toArray<HTMLElement>("[data-anim='product-image-parallax']").forEach((el) => {
        const img = el.querySelector("img");
        if (img) {
          gsap.fromTo(
            img,
            { yPercent: -10 },
            {
              yPercent: 10,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            }
          );
        }
      });

      // === BENEFIT CARDS (staggered grid reveal) ===
      gsap.utils.toArray<HTMLElement>("[data-anim='benefit-cards']").forEach((container) => {
        const cards = container.querySelectorAll(".pm-card");
        gsap.from(cards, {
          y: 50,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: { each: 0.06, from: "start" },
          scrollTrigger: { trigger: container, start: "top 80%" },
        });
      });

      // === GLASS CARDS (science section) ===
      gsap.utils.toArray<HTMLElement>("[data-anim='glass-cards']").forEach((container) => {
        const cards = container.querySelectorAll(".pm-glass");
        gsap.from(cards, {
          y: 40,
          opacity: 0,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.15,
          scrollTrigger: { trigger: container, start: "top 85%" },
        });
      });

      // === FAQ ITEMS ===
      gsap.utils.toArray<HTMLElement>("[data-anim='faq-item']").forEach((el, i) => {
        gsap.from(el, {
          y: 30,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%" },
        });
      });

      // === TRUST ITEMS ===
      gsap.utils.toArray<HTMLElement>("[data-anim='trust-item']").forEach((el, i) => {
        gsap.from(el, {
          x: -20,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
          delay: i * 0.1,
          scrollTrigger: { trigger: el, start: "top 90%" },
        });
      });

      // === CTA SECTION ===
      gsap.utils.toArray<HTMLElement>("[data-anim='cta-section']").forEach((el) => {
        const children = el.querySelectorAll("h3, p, div");
        gsap.from(children, {
          y: 30,
          opacity: 0,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.12,
          scrollTrigger: { trigger: el, start: "top 80%" },
        });
      });

      // === CONTACT CARDS ===
      gsap.utils.toArray<HTMLElement>("[data-anim='contact-card']").forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      // === AVAL CAROUSEL ===
      gsap.utils.toArray<HTMLElement>("[data-anim='aval-carousel']").forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      // === ACCORDION (salud page) ===
      gsap.utils.toArray<HTMLElement>("[data-anim='accordion-item']").forEach((el) => {
        gsap.from(el, {
          y: 30,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%" },
        });
      });

      // === SUBPAGE HERO ===
      gsap.utils.toArray<HTMLElement>("[data-anim='subpage-hero']").forEach((el) => {
        const children = el.querySelectorAll(".pm-label, h1, p");
        gsap.from(children, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
        });
      });

      // === TIMELINE ITEMS (historia) ===
      gsap.utils.toArray<HTMLElement>("[data-anim='timeline-item']").forEach((el) => {
        gsap.from(el, {
          x: -40,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      // === ANALYSIS CARDS (documento-critico) ===
      gsap.utils.toArray<HTMLElement>("[data-anim='analysis-card']").forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      // === MENU LINK CARDS (menu-principal) ===
      gsap.utils.toArray<HTMLElement>("[data-anim='menu-link']").forEach((el, i) => {
        gsap.from(el, {
          y: 30,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
          delay: i * 0.05,
          scrollTrigger: { trigger: el, start: "top 90%" },
        });
      });

      // === LOGO SEAL FLOAT ===
      gsap.to("[data-anim='logo-seal']", {
        y: -8,
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });

      // === SCROLL INDICATOR BOUNCE ===
      gsap.to("[data-anim='scroll-indicator']", {
        y: 8,
        duration: 1.2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Refresh ScrollTrigger after everything loads
      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, []);
}
