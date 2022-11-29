import React, { FC, memo } from 'react';
import BucketSvg from '../svg/bucket.svg';

export interface IBucketIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BucketIcon: FC<IBucketIconProps> = memo(props => {
  return <BucketSvg {...props} />;
});
