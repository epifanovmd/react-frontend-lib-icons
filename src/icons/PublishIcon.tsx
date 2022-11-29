import React, { FC, memo } from 'react';
import PublishSvg from '../svg/publish.svg';

export interface IPublishIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PublishIcon: FC<IPublishIconProps> = memo(props => {
  return <PublishSvg {...props} />;
});
