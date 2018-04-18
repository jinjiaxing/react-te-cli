#!/usr/bin/env node

console.log('welcome to react-te-cli');

const clone = require('git-clone');
const program = require('commander');
const shell = require('shelljs');
const log = require('tracer').colorConsole();

program
    .version('1.0.0')
    .description('react工程化模板cli工具')
program
    .command('* <project>')
    .action(function(project) {
        log.info('使用例子：react-te-cli projectName')
        if (project) {
            let pwd = shell.pwd()
            log.info(`正在拉取模板代码，下载位置：${pwd}/${project}/ ...`)
            clone(`https://github.com/jinjiaxing/react-template-easily.git`, pwd + `/${project}`, null, function() {
                shell.rm('-rf', pwd + `/${project}/.git`)
                log.info('模板工程建立完成')
            })
        } else {
            log.error('正确命令例子：react-te-cli projectName')
        }
    })
program.parse(process.argv)
