import React, { FC, memo } from 'react';
import RelativeScaleSvg from '../svg/relative-scale.svg';

export interface IRelativeScaleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RelativeScaleIcon: FC<IRelativeScaleIconProps> = memo(props => {
  return <RelativeScaleSvg {...props} />;
});
