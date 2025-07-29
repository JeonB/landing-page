'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const typographyVariants = cva('text-foreground', {
  variants: {
    variant: {
      h1: 'scroll-m-20 font-extrabold tracking-tight',
      h2: 'scroll-m-20 font-semibold tracking-tight',
      h3: 'scroll-m-20 font-semibold tracking-tight',
      h4: 'scroll-m-20 font-semibold tracking-tight',
      h5: 'scroll-m-20 font-semibold tracking-tight',
      h6: 'scroll-m-20 font-semibold tracking-tight',
      body1: 'leading-7',
      body2: 'leading-6',
      caption: 'leading-5',
      overline: 'font-medium uppercase tracking-wide leading-5',
      subtitle1: 'font-medium leading-7',
      subtitle2: 'font-medium leading-6',
    },
    weight: {
      thin: 'font-thin',
      extralight: 'font-extralight',
      light: 'font-light',
      regular: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      extrabold: 'font-extrabold',
      black: 'font-black',
    },
    fontSize: {
      '2xs': 'text-[8px]', // 8px
      xs: 'text-xs', // 12px
      sm: 'text-sm', // 14px
      base: 'text-base', // 16px
      lg: 'text-lg', // 18px (기본값)
      xl: 'text-xl', // 20px
      '2xl': 'text-2xl', // 24px
      '3xl': 'text-3xl', // 30px
      '4xl': 'text-4xl', // 36px
      '5xl': 'text-5xl', // 48px
      '6xl': 'text-6xl', // 60px
      '7xl': 'text-7xl', // 72px
      '8xl': 'text-8xl', // 96px
      '9xl': 'text-9xl', // 128px
    },
    textColor: {
      default: 'text-foreground',
      primary: 'text-primary',
      secondary: 'text-muted-foreground',
      accent: 'text-accent-foreground',
      destructive: 'text-destructive',
      muted: 'text-muted-foreground',
      white: 'text-white',
      black: 'text-black',
      blue: 'text-blue-primary',
      green: 'text-green-600',
      red: 'text-red-600',
      yellow: 'text-yellow-600',
      purple: 'text-purple-600',
      pink: 'text-pink-600',
      indigo: 'text-indigo-600',
      gray: 'text-gray-100',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
      justify: 'text-justify',
    },
  },
  defaultVariants: {
    variant: 'body1',
    fontSize: 'lg',
    textColor: 'gray',
    align: 'left',
    weight: 'regular',
  },
});

type ElementType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div' | 'strong' | 'em' | 'small' | 'label';

export interface TypographyProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'color'>,
    VariantProps<typeof typographyVariants> {
  as?: ElementType;
  children: React.ReactNode;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, weight, fontSize, textColor, align, as, children, ...props }, ref) => {
    // variant에 따른 기본 element 결정
    const getDefaultElement = (): ElementType => {
      switch (variant) {
        case 'h1':
          return 'h1';
        case 'h2':
          return 'h2';
        case 'h3':
          return 'h3';
        case 'h4':
          return 'h4';
        case 'h5':
          return 'h5';
        case 'h6':
          return 'h6';
        case 'caption':
        case 'overline':
          return 'span';
        default:
          return 'p';
      }
    };

    const Component = as || getDefaultElement();

    return React.createElement(
      Component,
      {
        className: cn(typographyVariants({ variant, weight, fontSize, textColor, align, className })),
        ref,
        ...props,
      },
      children,
    );
  },
);

Typography.displayName = 'Typography';

export { Typography, typographyVariants };
