import React, { FC, memo } from 'react';
import RelationZeroOrManyToOnlyOneSvg from '../svg/relation-zero-or-many-to-only-one.svg';

export interface IRelationZeroOrManyToOnlyOneIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RelationZeroOrManyToOnlyOneIcon: FC<IRelationZeroOrManyToOnlyOneIconProps> = memo(props => {
  return <RelationZeroOrManyToOnlyOneSvg {...props} />;
});
