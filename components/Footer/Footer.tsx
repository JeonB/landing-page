import Image from 'next/image';
import { Typography } from '@/components/ui/Typography';

const Footer = () => {
  return (
    <footer className="relative bg-[#ECF4FF] px-4 py-8 md:px-[100px] md:pt-[57px] md:pb-20">
      <div className="container mx-auto">
        <div className="flex flex-col items-start justify-between md:flex-row md:items-center">
          <div>
            <Image src="/assets/images/logo.png" alt="inPHR Logo" width={100} height={28} className="mb-6" />
            <div className="text-sm text-gray-600">
              <a href="#" className="hover:underline">
                <Typography variant="body2" weight="bold" fontSize="base" as="span" className="text-gray-80">
                  이용약관
                </Typography>
              </a>{' '}
              <a href="#" className="ml-4 hover:underline">
                <Typography variant="body2" weight="bold" fontSize="base" as="span" className="text-gray-80">
                  개인정보처리방침
                </Typography>
              </a>
              <Typography variant="body2" className="text-gray-80 mt-6" fontSize="sm">
                상호: (주)소프트넷 | 대표이사: 이상수 | 대표번호: 02-3446-2502 | 팩스: 02-6203-2506 | 이메일:
                sales@Softnet.co.kr
                <br />
                본사: 서울특별시 강남구 삼성로 554 예성빌딩 5층 (06165)
                <br />
                IT 기술연구소: 서울특별시 강남구 삼성로 554 예성빌딩 4층 (06165)
                <br />
                Copyright © Softnet
              </Typography>
            </div>
          </div>

          <div className="mt-6 flex flex-row items-start space-x-4 md:mt-30 md:space-x-7">
            <div className="flex flex-col items-center text-center">
              <Image src="/assets/images/certifications.png" alt="Good Software" width={50} height={50} className="" />
              <Typography variant="body2" className="mt-2" fontSize="2xs" textColor="gray">
                감염병 격리자 비대면 통합관리
                <br />
                리시스템 V1.0
              </Typography>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image src="/assets/images/certifications.png" alt="Good Software" width={50} height={50} className="" />
              <Typography variant="body2" className="mt-2" fontSize="2xs" textColor="gray">
                염증성 장질환자 주도형
                <br />
                라이프케어 맞춤형
                <br />
                건강관리 서비스 V1.3.8
              </Typography>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image src="/assets/images/certifications.png" alt="Good Software" width={50} height={50} className="" />
              <Typography variant="body2" className="mt-2" fontSize="2xs" textColor="gray">
                PHR 기반 개인건강관리
                <br />
                플랫폼 시스템 V2.0
              </Typography>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image src="/assets/images/certifications.png" alt="SECU-STAR" width={50} height={50} className="" />
              <Typography variant="body2" className="mt-2" fontSize="2xs" textColor="gray">
                정보보호 준비도 BB 등급
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
