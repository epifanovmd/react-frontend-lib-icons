import React, { FC, memo } from 'react';
import SilverwareForkSvg from '../svg/silverware-fork.svg';

export interface ISilverwareForkIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SilverwareForkIcon: FC<ISilverwareForkIconProps> = memo(props => {
  return <SilverwareForkSvg {...props} />;
});
