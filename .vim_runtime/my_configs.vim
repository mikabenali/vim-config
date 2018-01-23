" StartUp
function! StartUp()
  if 0 == argc()
    NERDTree
    Tagbar
    GitGutterEnable
  endif
endfunction

autocmd VimEnter * call StartUp()

" General
set number
set cursorline
set tabstop=2
:set shiftwidth=2
:set expandtab
set tabstop=8 softtabstop=0 expandtab shiftwidth=2 smarttab "2 spaces for tab"
colorscheme base16-oceanicnext

" Typescrip-vim
let g:typescript_compiler_binary = 'tsc'
let g:typescript_compiler_options = ''
autocmd QuickFixCmdPost [^l]* nested cwindow
autocmd QuickFixCmdPost    l* nested lwindow

" Vim JS pretty template
autocmd FileType typescript JsPreTmpl html
autocmd FileType typescript syn clear foldBraces

" syntastic
set statusline+=%#warningmsg#
set statusline+=%{SyntasticStatuslineFlag()}
set statusline+=%*
let g:syntastic_check_on_open = 1
let g:syntastic_check_on_wq = 0
let g:tsuquyomi_disable_quickfix = 1
let g:syntastic_typescript_checkers = ['tsuquyomi'] 

" Emmet
let g:user_emmet_install_global = 0
autocmd FileType html,css EmmetInstall

" PHP Namespace
function! IPhpInsertUse()
    call PhpInsertUse()
    call feedkeys('a',  'n')
endfunction
autocmd FileType php inoremap <Leader>u <Esc>:call IPhpInsertUse()<CR>
autocmd FileType php noremap <Leader>u :call PhpInsertUse()<CR

"
let g:NERDTreeWinPos = "left"

" VIM-PHPFMT
let g:phpfmt_command = 'vendor/bin/phpcbf'
