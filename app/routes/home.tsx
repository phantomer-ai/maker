import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "홈 - WeMake" },
    { name: "description", content: "WeMake에 오신 것을 환영합니다!" },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">WeMake에 오신 것을 환영합니다</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            혁신적인 기술 솔루션으로 비즈니스의 미래를 만들어갑니다
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="/services" 
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              서비스 보기
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              연락하기
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">우리의 강점</h2>
            <p className="text-lg text-gray-600">고객의 성공을 위한 핵심 역량</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">빠른 개발</h3>
              <p className="text-gray-600">최신 기술과 효율적인 프로세스로 빠른 결과를 제공합니다.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">안전한 솔루션</h3>
              <p className="text-gray-600">보안을 최우선으로 하는 안전하고 신뢰할 수 있는 솔루션을 제공합니다.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">맞춤형 솔루션</h3>
              <p className="text-gray-600">고객의 요구사항에 맞는 맞춤형 솔루션을 제공합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">프로젝트를 시작할 준비가 되셨나요?</h2>
          <p className="text-lg text-gray-600 mb-8">지금 바로 연락하여 상담을 받아보세요.</p>
          <a 
            href="/contact" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            무료 상담 받기
          </a>
        </div>
      </section>
    </div>
  );
}
