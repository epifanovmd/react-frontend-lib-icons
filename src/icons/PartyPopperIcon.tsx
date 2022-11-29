import React, { FC, memo } from 'react';
import PartyPopperSvg from '../svg/party-popper.svg';

export interface IPartyPopperIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PartyPopperIcon: FC<IPartyPopperIconProps> = memo(props => {
  return <PartyPopperSvg {...props} />;
});
