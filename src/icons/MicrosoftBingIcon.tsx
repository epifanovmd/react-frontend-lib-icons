import React, { FC, memo } from 'react';
import MicrosoftBingSvg from '../svg/microsoft-bing.svg';

export interface IMicrosoftBingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MicrosoftBingIcon: FC<IMicrosoftBingIconProps> = memo(props => {
  return <MicrosoftBingSvg {...props} />;
});
