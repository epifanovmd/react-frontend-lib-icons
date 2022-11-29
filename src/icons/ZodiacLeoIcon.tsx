import React, { FC, memo } from 'react';
import ZodiacLeoSvg from '../svg/zodiac-leo.svg';

export interface IZodiacLeoIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ZodiacLeoIcon: FC<IZodiacLeoIconProps> = memo(props => {
  return <ZodiacLeoSvg {...props} />;
});
