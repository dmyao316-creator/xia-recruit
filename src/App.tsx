import { useEffect, useRef } from "react";
import "./App.css";

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: any[] = [];
    const mouse = { x: 0, y: 0 };

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    for (let i = 0; i < 110; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 0.7,
        dy: (Math.random() - 0.5) * 0.7,
      });
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          p.x -= dx * 0.02;
          p.y -= dy * 0.02;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const dx2 = p.x - particles[j].x;
          const dy2 = p.y - particles[j].y;
          const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

          if (dist2 < 100) {
            ctx.strokeStyle = "rgba(255,255,255,0.08)";
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(draw);
    }

    draw();
  }, []);
  const base = import.meta.env.BASE_URL;
  const images = [
    "1.png",
    "2.jpg",
    "3.jpg",
    "4.png",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
  ];

  return (
    <>
      <canvas ref={canvasRef} className="bg-canvas"></canvas>

      <div className="page">

        <h1 className="title">
          🎉🎉🎉欢迎报考夏书银老师！战绩可查！
        </h1>

        <section className="block">
          <h2>📮联系方式</h2>
          <p>
            学院官网邮箱：
            <a href="mailto:xiasy@cqupt.edu.cn">
              xiasy@cqupt.edu.cn
            </a>
          </p>
          <p>
            师兄师姐咨询群：927092792
            <span className="tag">优先推荐</span>
          </p>
        </section>

        <section className="block">
          <h2>🔥研究方向</h2>
          <p>粒球计算（Granular-Ball Computing）</p>
          <p>计算智能与机器学习</p>
          <p>图学习与图对比学习</p>
          <p>多视图学习与流式聚类</p>
          <p>大数据智能分析</p>
        </section>

        <section className="block">
          <h2>🔥招生计划</h2>
          <p>硕士、博士若干名</p>
          <p>欢迎人工智能、计算机、软件工程、数学等相关专业同学报考。</p>
        </section>

        <section className="block">
          <h2>🔥团队优势</h2>
          <p>国家级青年人才团队</p>
          <p>国家重点研发计划 / 原创探索项目 / 优青</p>
          <p>TPAMI / ICML / AAAI 等顶级成果</p>
          <p>多项国家级、省部级科技奖励</p>
        </section>

        <section className="block">
          <h2>🔥团队氛围</h2>

          
          
          <div className="photo-grid">

            {/* <img src="/images/1.png" alt="团队聚餐" />
            <img src="/images/2.jpg" alt="会议出差" />
            <img src="/images/3.jpg" alt="团建活动" />
            <img src="/images/4.png" alt="集体出游" /> */}
            {/* <img src={`${base}images/1.png`} alt="团队聚餐" />
            <img src={`${base}images/2.jpg`} alt="会议出差" />
            <img src={`${base}images/3.jpg`} alt="团建活动" />
            <img src={`${base}images/4.png`} alt="集体出游" /> */}
            {images.map((img) => (
              <img key={img} src={`${base}images/${img}`} />
            ))}

          </div>
           
          

        </section>

        <section className="block">
          <h2>🔥导师简介</h2>
          <p>
            夏书银，教授、博导，重庆邮电大学人工智能学院副院长。
          </p>
          <p>IEEESeniorMember，全球前2%顶尖科学家。</p>
          <p>
            提出并系统发展粒球计算理论，在国际人工智能领域具有广泛影响。
          </p>
        </section>

        <div className="cta">
          🚀欢迎有科研热情、数学基础扎实、对人工智能前沿方向感兴趣的同学加入团队
        </div>

      </div>
    </>
  );
}

export default App;