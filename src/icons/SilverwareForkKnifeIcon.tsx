import React, { FC, memo } from 'react';
import SilverwareForkKnifeSvg from '../svg/silverware-fork-knife.svg';

export interface ISilverwareForkKnifeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SilverwareForkKnifeIcon: FC<ISilverwareForkKnifeIconProps> = memo(props => {
  return <SilverwareForkKnifeSvg {...props} />;
});
