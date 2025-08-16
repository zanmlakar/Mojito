"use client";
import React from "react";
import gsap from "gsap";
import { CSSRulePlugin, ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Cocktails from "@/components/Cocktails";
import About from "@/components/About";

gsap.registerPlugin(ScrollTrigger, SplitText,CSSRulePlugin);

export default function page() {
    return (
        <main>
            <Navbar />
            <Hero />
            <Cocktails/>
            <About/>
        </main>
    );
}
