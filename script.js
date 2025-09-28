document.addEventListener('DOMContentLoaded', () => {
    const functions = [
        'About', 'Research', 'Projects', 'Contact'
    ];

    // This is a map of page filenames to their specific assembly code and labels.
    const pageData = {
        'index.html': {
            label: 'main:',
            code: [
                { comment: '; ------------------------------------------------------------' },
                { addr: '.idkhidden:0x1337', mnemonic: 'push', operands: 'rbp', comment: '' },
                { addr: '.idkhidden:0x1338', mnemonic: 'mov', operands: 'rbp, rsp', comment: '' },
                { addr: '.idkhidden:0x133B', mnemonic: 'mov', operands: 'al, byte ptr [rbp-0x8]'},
                { addr: '.idkhidden:0x133F', mnemonic: 'cmp', operands: 'al, 1', comment: '' },
                { addr: '.idkhidden:0x1341', mnemonic: 'je', operands: '0x134C', comment: '' },
                { addr: '.idkhidden:0x1343', mnemonic: 'cmp', operands: 'al, 2', comment: '' },
                { addr: '.idkhidden:0x1345', mnemonic: 'je', operands: '0x134E', comment: '' },
                { addr: '.idkhidden:0x1347', mnemonic: 'cmp', operands: 'al, 3', comment: '' },
                { addr: '.idkhidden:0x1349', mnemonic: 'je', operands: '0x1350', comment: '' },
                { addr: '.idkhidden:0x134B', mnemonic: 'mov', operands: 'rcx'},
                { addr: '.idkhidden:0x134C', mnemonic: 'call', operands: 'about'},
                { addr: '.idkhidden:0x134D', mnemonic: 'jmp', operands: '0x1354'},
                { addr: '.idkhidden:0x134E', mnemonic: 'call', operands: 'research'},
                { addr: '.idkhidden:0x1350', mnemonic: 'call', operands: 'projects'},
                { addr: '.idkhidden:0x1352', mnemonic: 'call', operands: 'contacts'},
                { addr: '.idkhidden:0x1354', mnemonic: 'pop', operands: 'rbp'},
                { addr: '.idkhidden:0x1355', mnemonic: 'ret', operands: ''},
                { comment: '; ------------------------------------------------------------' }
            ]
        },
        'research.html': {
            label: 'Research:',
            code: [
                { comment: '; ------------------------------------------------------------' },
                { addr: '.idkhidden:0x1337', mnemonic: 'push', operands: 'rbp', comment: '' },
                { addr: '.idkhidden:0x1338', mnemonic: 'mov', operands: 'rbp, rsp', comment: '' },
                { addr: '.idkhidden:0x133A', mnemonic: 'mov', operands: 'al, [rbp-0x8]' },
                { addr: '.idkhidden:0x133D', mnemonic: 'cmp', operands: 'al, 1'},
                { addr: '.idkhidden:0x133F', mnemonic: 'jne', operands: '0x1358'},
                { addr: '.idkhidden:0x1341', mnemonic: 'lea', operands: 'rdx, [rbp-0x10]'},
                { addr: '.idkhidden:0x1345', mnemonic: 'xor', operands: 'eax, eax'},
                { addr: '.idkhidden:0x1347', mnemonic: 'mov', operands: 'ecx, 1'},
                { addr: '.idkhidden:0x134A', mnemonic: 'lock cmpxchg', operands: 'dword ptr [rdx], ecx', comment: '; spinlock go brrr'},
                { addr: '.idkhidden:0x134E', mnemonic: 'jnz', operands: '0x1345'},
                { addr: '.idkhidden:0x1350', mnemonic: 'call', operands: 'research'},
                { addr: '.idkhidden:0x1354', mnemonic: 'mov', operands: 'dword ptr [rdx], 0' },
                { addr: '.idkhidden:0x1358', mnemonic: 'pop', operands: 'rbp', comment: '' },
                { addr: '.idkhidden:0x1359', mnemonic: 'ret', operands: '', comment: '' },
                { addr: '.idkhidden:0x1360', mnemonic: 'nop', operands: '' },
                { addr: '.idkhidden:0x1361', mnemonic: 'ret', operands: '', comment: '' },
                { comment: '; ------------------------------------------------------------' },
            ]
        },
        'projects.html': {
            label: 'Projects:',
            code: [
                { comment: '; ------------------------------------------------------------' },
                { addr: '.idkhidden:0x1337', mnemonic: 'push', operands: 'rbp', comment: '' },
                { addr: '.idkhidden:0x1338', mnemonic: 'mov', operands: 'rbp, rsp', comment: '' },
                { addr: '.idkhidden:0x133A', mnemonic: 'rdtsc', operands: '', comment: '' },
                { addr: '.idkhidden:0x133B', mnemonic: 'mov', operands: 'r8, rax', comment: '' },
                { addr: '.idkhidden:0x133E', mnemonic: 'rdtsc', operands: '', comment: '' },
                { addr: '.idkhidden:0x133F', mnemonic: 'sub', operands: 'rax, r8', comment: '' },
                { addr: '.idkhidden:0x1342', mnemonic: 'cmp', operands: 'rax, 0x500', comment: '' },
                { addr: '.idkhidden:0x1345', mnemonic: 'jg', operands: '0x1350', comment: '; timing looks suspicious' },
                { addr: '.idkhidden:0x1347', mnemonic: 'call', operands: 'IsDebuggerPresent', comment: '' },
                { addr: '.idkhidden:0x134C', mnemonic: 'test', operands: 'eax, eax', comment: '' },
                { addr: '.idkhidden:0x134E', mnemonic: 'jne', operands: '0x1350', comment: '; debugger present -> tamper' },
                { addr: '.idkhidden:0x1350', mnemonic: 'xor', operands: 'rax, rax'},
                { addr: '.idkhidden:0x1353', mnemonic: 'pop', operands: 'rbp', comment: '' },
                { addr: '.idkhidden:0x1354', mnemonic: 'ret', operands: '', comment: '' },
                { comment: '; ------------------------------------------------------------' },
            ]
        },
        'contact.html': {
            label: 'Contact:',
            code: [
                { comment: '; ------------------------------------------------------------' },
                { addr: '.idkhidden:0x1337', mnemonic: 'push', operands: 'rbp', comment: '' },
                { addr: '.idkhidden:0x1338', mnemonic: 'mov', operands: 'rbp, rsp', comment: '' },
                { addr: '.idkhidden:0x133A', mnemonic: 'xor', operands: 'rdx, rdx', comment: '' },
                { addr: '.idkhidden:0x133C', mnemonic: 'mov', operands: 'rcx, -1'},
                { addr: '.idkhidden:0x1342', mnemonic: 'call', operands: 'CheckRemoteDebuggerPresent'},
                { addr: '.idkhidden:0x1347', mnemonic: 'test', operands: 'eax, eax', comment: '' },
                { addr: '.idkhidden:0x1349', mnemonic: 'jnz', operands: '0x1355', comment: '; Debugger detected' },
                { addr: '.idkhidden:0x134B', mnemonic: 'mov', operands: 'eax, 0'},
                { addr: '.idkhidden:0x1350', mnemonic: 'jmp', operands: '0x135A', comment: '' },
                { addr: '.idkhidden:0x1355', mnemonic: 'int3', operands: '', comment: '; Break into debugger' },
                { addr: '.idkhidden:0x1356', mnemonic: 'mov', operands: 'eax, 0xDEAD' },
                { addr: '.idkhidden:0x135A', mnemonic: 'pop', operands: 'rbp', comment: '' },
                { addr: '.idkhidden:0x135B', mnemonic: 'ret', operands: '', comment: '' },
                { comment: '; ------------------------------------------------------------' },
            ]
        }
    };

    function populateFunctionList() {
        const functionList = document.getElementById('functionList');
        if (!functionList) return;

        const pageMap = {
            'About': 'index.html',
            'Research': 'research.html',
            'Projects': 'projects.html',
            'Contact': 'contact.html'
        };
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';

        functions.forEach((func) => {
            const item = document.createElement('div');
            item.className = 'function-item';
            const targetPage = pageMap[func];

            if (targetPage === currentPage) {
                item.classList.add('selected');
            }

            item.innerHTML = `<span class="function-icon"></span>${func}`;
            item.addEventListener('click', () => {
                if (targetPage) window.location.href = targetPage;
            });
            functionList.appendChild(item);
        });
    }

    function populateAssemblyCode() {
        const addressColumn = document.getElementById('addressColumn');
        const codeColumn = document.getElementById('codeColumn');
        if (!addressColumn || !codeColumn) return;

        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const { label, code: assemblyCode } = pageData[currentPage];

        assemblyCode.forEach((instruction, index) => {
            const addrDiv = document.createElement('div');
            addrDiv.className = 'address-line';
            addrDiv.textContent = instruction.addr || '';
            addressColumn.appendChild(addrDiv);

            const codeDiv = document.createElement('div');
            codeDiv.className = 'code-line';
            
            const instructionSpan = document.createElement('span');
            let instructionHtml = '';

            if (instruction.mnemonic) {
                instructionHtml = `<span class="mnemonic">${instruction.mnemonic}</span>`;
                if (instruction.operands) {
                    let remaining = instruction.operands;
                    let processedHtml = '';
                    const tokenRegex = /(\b(qword|dword|word|byte)\sptr\b|\b([er]?[a-d]x|[er]?[sb]p|[er]?[sd]i|r[8-9]|r1[0-5])\b|0x[0-9a-fA-F]+|\bsub_[0-9a-fA-F]+\b|[\[\]\+\-\*])/gi;
                    
                    let match;
                    let lastIndex = 0;
                    while ((match = tokenRegex.exec(remaining)) !== null) {
                        processedHtml += remaining.substring(lastIndex, match.index);
                        const token = match[0];
                        if (/\b(qword|dword|word|byte)\sptr\b/i.test(token)) {
                            processedHtml += `<span class="pointer-directive">${token}</span>`;
                        } else if (/\bsub_[0-9a-fA-F]+\b/.test(token)) {
                            processedHtml += `<span class="function-call">${token}</span>`;
                        } else if (match[2]) {
                            processedHtml += `<span class="register">${token}</span>`;
                        } else if (/^0x/.test(token)) {
                            processedHtml += `<span class="immediate">${token}</span>`;
                        } else {
                            processedHtml += token;
                        }
                        lastIndex = tokenRegex.lastIndex;
                    }
                    processedHtml += remaining.substring(lastIndex);
                    instructionHtml += `<span class="operand">${processedHtml}</span>`;
                }
            }
            instructionSpan.innerHTML = instructionHtml;
            codeDiv.appendChild(instructionSpan);

            if (instruction.comment) {
                const commentSpan = document.createElement('span');
                commentSpan.className = 'comment';
                commentSpan.textContent = instruction.comment;
                codeDiv.appendChild(commentSpan);
            }
            
            if (!instruction.mnemonic && instruction.comment) {
                codeDiv.classList.add('comment-only-line');
            }
            
            codeColumn.appendChild(codeDiv);
            
            if (index === 0) {
                const functionLabel = document.createElement('div');
                functionLabel.className = 'function-label';
                functionLabel.textContent = label;
                
                const blankAddrDiv = document.createElement('div');
                blankAddrDiv.className = 'address-line blank-line';

                codeColumn.insertBefore(functionLabel, codeColumn.children[1]);
                addressColumn.insertBefore(blankAddrDiv, addressColumn.children[1]);
            }
        });
    }

    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });

    populateFunctionList();
    populateAssemblyCode();
});