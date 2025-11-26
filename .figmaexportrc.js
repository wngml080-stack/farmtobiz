module.exports = {
  commands: [
    [
      'components',
      {
        fileId: 'YOUR_FIGMA_FILE_ID', // 피그마 파일 ID를 여기에 입력하세요
        onlyFromPages: ['Components', 'Icons'], // 내보낼 페이지 이름
        transformers: [
          require('@figma-export/transform-svg-with-svgo')({
            plugins: [
              {
                name: 'preset-default',
                params: {
                  overrides: {
                    removeViewBox: false,
                  },
                },
              },
            ],
          }),
        ],
        outputters: [
          require('@figma-export/output-components-as-svgr')({
            output: './components/icons',
          }),
        ],
      },
    ],
  ],
};
