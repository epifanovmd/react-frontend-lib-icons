import React, { FC, memo } from 'react';
import RelationZeroOrManyToZeroOrOneSvg from '../svg/relation-zero-or-many-to-zero-or-one.svg';

export interface IRelationZeroOrManyToZeroOrOneIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RelationZeroOrManyToZeroOrOneIcon: FC<IRelationZeroOrManyToZeroOrOneIconProps> = memo(props => {
  return <RelationZeroOrManyToZeroOrOneSvg {...props} />;
});
