<!DOCTYPE html>
<html>
<head>
  <meta charset = "utf-8"/>
  //Three.jsのライブラリを利用できるようにする
  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/101/three.min.js"></script>
  <script>
    // ページの読み込みを待つ（WebGLの処理は読み込みを終わらせてから）
    window.addEventListener('load', init);
    //関数init
    function init() {

      // サイズを指定
      const width = 960;
      const height = 540;

      // レンダラーを作成
      //レンダラは撮影した映像の現像部分を担っていると考える
      const renderer = new THREE.WebGLRenderer({
        //canvasと連携させる
        canvas: document.querySelector('#myCanvas')
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(width, height);

      // シーンを作成
      //撮影する対象となる情景（シーン）
      const scene = new THREE.Scene();

      // カメラを作成
      //撮影する機材（カメラ）
      //THREE.PerspectiveCameraクラスのコンストラクターで画角、アスペクト比、描画開始距離、描画終了距離の4つの情報を引数として渡す
      const camera = new THREE.PerspectiveCamera(45, width / height);
      camera.position.set(0, 0, +1000);

      // 箱を作成
      // new THREE.BoxGeometry(幅, 高さ, 奥行き)
      const geometry = new THREE.BoxGeometry(400, 100, 400);
      //マテリアルは色や質感の情報を持っている
      const material = new THREE.MeshNormalMaterial();
      //new THREE.Mesh(ジオメトリ,マテリアル)
      const box = new THREE.Mesh(geometry, material);
      // シーンに追加
      scene.add(box);

      //JavaScriptでアニメーションをさせるには、時間経過で関数を呼び続ける必要がある
      //requestAnimationFrame()というグローバルメソッドを使用
      // 初回実行
      tick();

      // 毎フレーム時に実行されるループイベントです
      function tick() {
        // アニメーション処理をここに書く
        box.rotation.x += 0.01;
        box.rotation.y += 0.01;

        renderer.render(scene, camera); // レンダリング

        requestAnimationFrame(tick);
      }
    }
  </script>
</head>
<body>
  //描画エリアの作成
  <canvas id="myCanvas"></canvas>
</body>
</html>
