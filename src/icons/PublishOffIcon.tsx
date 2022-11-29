import React, { FC, memo } from 'react';
import PublishOffSvg from '../svg/publish-off.svg';

export interface IPublishOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PublishOffIcon: FC<IPublishOffIconProps> = memo(props => {
  return <PublishOffSvg {...props} />;
});
