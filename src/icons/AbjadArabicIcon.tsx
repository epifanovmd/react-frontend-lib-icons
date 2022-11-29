import React, { FC, memo } from 'react';
import AbjadArabicSvg from '../svg/abjad-arabic.svg';

export interface IAbjadArabicIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AbjadArabicIcon: FC<IAbjadArabicIconProps> = memo(props => {
  return <AbjadArabicSvg {...props} />;
});
