import React, { FC, memo } from 'react';
import ZodiacSagittariusSvg from '../svg/zodiac-sagittarius.svg';

export interface IZodiacSagittariusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ZodiacSagittariusIcon: FC<IZodiacSagittariusIconProps> = memo(props => {
  return <ZodiacSagittariusSvg {...props} />;
});
