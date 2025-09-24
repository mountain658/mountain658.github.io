// Want this removed or tweaked? DM mountain658 on GitHub or open an issue.
// Goal: Help users find unblocked/updated sites. Let's work together.

//WARNING: DELETING THIS FILE FROM ITS CDN COULD CAUSE DISASTERS IN THE FUTURE
//Just don't delete it, it does no harm and only helps the user :)
//I will put updates here for out-of-date sites

//DO NOT DELETE
(function() {
  const NEW_CHAT_URL = "https://escaping.work/chat/";

  function replaceIframe(iframe) {
    if (iframe && iframe.src.includes("ccc.html")) {
      iframe.src = NEW_CHAT_URL;
    }
  }

  document.querySelectorAll("iframe[src*='ccc.html']").forEach(replaceIframe);

  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        if (node.tagName === "IFRAME") {
          replaceIframe(node);
        } else if (node.querySelectorAll) {
          node.querySelectorAll("iframe[src*='ccc.html']").forEach(replaceIframe);
        }
      });
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });
})();

(function() {
  if (window.__modalScriptInjected) return;
  window.__modalScriptInjected = true;

  if (window.localStorage && localStorage.getItem('cornerModalChoice') === 'never') return;
  if (window.sessionStorage && sessionStorage.getItem('cornerModalChoice') === 'later') return;

  function createModal() {
    var modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.bottom = '16px';
    modal.style.left = '16px';
    modal.style.background = '#fefefe';
    modal.style.border = '1px solid #ccc';
    modal.style.borderRadius = '8px';
    modal.style.boxShadow = '0 2px 6px rgba(0,0,0,0.2)';
    modal.style.padding = '12px 16px';
    modal.style.fontFamily = 'sans-serif';
    modal.style.fontSize = '14px';
    modal.style.zIndex = '99999';
    modal.style.color = 'black';

    modal.innerHTML = ''
      + '<div style="margin-bottom: 8px;">Maintenance 🔧 by mountain658 :)</div>'
      + '<div style="margin-bottom: 8px;">Is this site old, broken, or blocked at school?</div>'
      + '<div style="margin-bottom: 8px;">I\'ll give you a new link!</div>'
      + '<div style="margin-bottom: 8px;">Email me, at: <a href="mailto:mountaingames658@zohomail.com">mountaingames658@zohomail.com</a></div>'
      + '<button id="hideModalBtn" style="margin-right: 8px;">Hide</button>'
      + '<button id="laterModalBtn" style="margin-right: 8px;">Remind Me Later</button>'
      + '<button id="neverModalBtn">Never Show Again</button>';

    document.body.appendChild(modal);

    document.getElementById('hideModalBtn').onclick = function() {
      modal.parentNode.removeChild(modal);
    };

    document.getElementById('laterModalBtn').onclick = function() {
      if (window.sessionStorage) {
        sessionStorage.setItem('cornerModalChoice', 'later');
      }
      modal.parentNode.removeChild(modal);
    };

    document.getElementById('neverModalBtn').onclick = function() {
      if (window.localStorage) {
        localStorage.setItem('cornerModalChoice', 'never');
      }
      modal.parentNode.removeChild(modal);
    };
  }

  if (document.body) {
    createModal();
  } else {
    if (document.addEventListener) {
      document.addEventListener('DOMContentLoaded', createModal, false);
    } else {
      // For really old browsers
      window.attachEvent('onload', createModal);
    }
  }
})();
