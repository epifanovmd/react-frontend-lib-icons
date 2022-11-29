import React, { FC, memo } from 'react';
import YoutubeSubscriptionSvg from '../svg/youtube-subscription.svg';

export interface IYoutubeSubscriptionIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const YoutubeSubscriptionIcon: FC<IYoutubeSubscriptionIconProps> = memo(props => {
  return <YoutubeSubscriptionSvg {...props} />;
});
