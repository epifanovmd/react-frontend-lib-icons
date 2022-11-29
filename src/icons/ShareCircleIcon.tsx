import React, { FC, memo } from 'react';
import ShareCircleSvg from '../svg/share-circle.svg';

export interface IShareCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShareCircleIcon: FC<IShareCircleIconProps> = memo(props => {
  return <ShareCircleSvg {...props} />;
});
