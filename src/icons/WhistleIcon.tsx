import React, { FC, memo } from 'react';
import WhistleSvg from '../svg/whistle.svg';

export interface IWhistleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WhistleIcon: FC<IWhistleIconProps> = memo(props => {
  return <WhistleSvg {...props} />;
});
