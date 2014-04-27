/*
 * This file is part of gorilla-repl. Copyright (C) 2014-, Jony Hudson.
 *
 * gorilla-repl is licenced to you under the MIT licence. See the file LICENCE.txt for full details.
 */

$(function () {
    MathJax.Hub.Config({
        messageStyle: "none",
        showProcessingMessages: false,
        tex2jax: {
            inlineMath: [
                ['@@', '@@']
            ]
        }
    });
    MathJax.Hub.Configured();
    CodeMirror.colorize();
});

