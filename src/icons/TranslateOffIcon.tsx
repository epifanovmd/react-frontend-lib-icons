import React, { FC, memo } from 'react';
import TranslateOffSvg from '../svg/translate-off.svg';

export interface ITranslateOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TranslateOffIcon: FC<ITranslateOffIconProps> = memo(props => {
  return <TranslateOffSvg {...props} />;
});
