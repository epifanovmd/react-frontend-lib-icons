import React, { FC, memo } from 'react';
import SilverwareCleanSvg from '../svg/silverware-clean.svg';

export interface ISilverwareCleanIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SilverwareCleanIcon: FC<ISilverwareCleanIconProps> = memo(props => {
  return <SilverwareCleanSvg {...props} />;
});
