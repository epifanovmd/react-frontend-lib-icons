import React, { FC, memo } from 'react';
import SilverwareSvg from '../svg/silverware.svg';

export interface ISilverwareIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SilverwareIcon: FC<ISilverwareIconProps> = memo(props => {
  return <SilverwareSvg {...props} />;
});
