import React, { FC, memo } from 'react';
import GoogleTranslateSvg from '../svg/google-translate.svg';

export interface IGoogleTranslateIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GoogleTranslateIcon: FC<IGoogleTranslateIconProps> = memo(props => {
  return <GoogleTranslateSvg {...props} />;
});
