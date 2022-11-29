import React, { FC, memo } from 'react';
import MastodonSvg from '../svg/mastodon.svg';

export interface IMastodonIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MastodonIcon: FC<IMastodonIconProps> = memo(props => {
  return <MastodonSvg {...props} />;
});
