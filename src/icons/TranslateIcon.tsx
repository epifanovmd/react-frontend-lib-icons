import React, { FC, memo } from 'react';
import TranslateSvg from '../svg/translate.svg';

export interface ITranslateIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TranslateIcon: FC<ITranslateIconProps> = memo(props => {
  return <TranslateSvg {...props} />;
});
