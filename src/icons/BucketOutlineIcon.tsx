import React, { FC, memo } from 'react';
import BucketOutlineSvg from '../svg/bucket-outline.svg';

export interface IBucketOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BucketOutlineIcon: FC<IBucketOutlineIconProps> = memo(props => {
  return <BucketOutlineSvg {...props} />;
});
